package de.neuefische.backend.repo;

import de.neuefische.backend.model.Event;
import org.springframework.data.domain.Example;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepo extends PagingAndSortingRepository<Event, String>, QueryByExampleExecutor<Event> {
    List<Event> findAll(Example example);
}
