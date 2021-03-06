var DynamicSettings = (function() {
  var settings = {
    'cluster.blocks.read_only': true,
    'cluster.blocks.read_only_allow_delete': true,
    'cluster.indices.close.enable': true,
    'cluster.info.update.interval': true,
    'cluster.info.update.timeout': true,
    'cluster.routing.allocation.allow_rebalance': true,
    'cluster.routing.allocation.awareness.attributes': true,
    'cluster.routing.allocation.balance.index': true,
    'cluster.routing.allocation.balance.shard': true,
    'cluster.routing.allocation.balance.threshold': true,
    'cluster.routing.allocation.cluster_concurrent_rebalance': true,
    'cluster.routing.allocation.disk.include_relocations': true,
    'cluster.routing.allocation.disk.reroute_interval': true,
    'cluster.routing.allocation.disk.threshold_enabled': true,
    'cluster.routing.allocation.disk.watermark.high': true,
    'cluster.routing.allocation.disk.watermark.low': true,
    'cluster.routing.allocation.enable': true,
    'cluster.routing.allocation.node_concurrent_incoming_recoveries': true,
    'cluster.routing.allocation.node_concurrent_outgoing_recoveries': true,
    'cluster.routing.allocation.node_concurrent_recoveries': true,
    'cluster.routing.allocation.node_initial_primaries_recoveries': true,
    'cluster.routing.allocation.same_shard.host': true,
    'cluster.routing.allocation.snapshot.relocation_enabled': true,
    'cluster.routing.allocation.total_shards_per_node': true,
    'cluster.routing.rebalance.enable': true,
    'cluster.service.slow_task_logging_threshold': true,
    'discovery.zen.commit_timeout': true,
    'discovery.zen.minimum_master_nodes': true,
    'discovery.zen.no_master_block': true,
    'discovery.zen.publish_diff.enable': true,
    'discovery.zen.publish_timeout': true,
    'gateway.initial_shards': true,
    'indices.breaker.fielddata.limit': true,
    'indices.breaker.fielddata.overhead': true,
    'indices.breaker.request.limit': true,
    'indices.breaker.request.overhead': true,
    'indices.breaker.total.limit': true,
    'indices.mapping.dynamic_timeout': true,
    'indices.recovery.internal_action_long_timeout': true,
    'indices.recovery.internal_action_timeout': true,
    'indices.recovery.max_bytes_per_sec': true,
    'indices.recovery.recovery_activity_timeout': true,
    'indices.recovery.retry_delay_network': true,
    'indices.recovery.retry_delay_state_sync': true,
    'indices.store.throttle.max_bytes_per_sec': true,
    'indices.store.throttle.type': true,
    'indices.ttl.interval': true,
    'ingest.new_date_format': true,
    'network.breaker.inflight_requests.limit': true,
    'network.breaker.inflight_requests.overhead': true,
    'script.max_compilations_per_minute': true,
    'search.default_search_timeout': true,
    'search.low_level_cancellation': true,
    'transport.tracer.exclude.0': true,
    'transport.tracer.exclude.1': true,
    'xpack.ml.node_concurrent_job_allocations': true,
    'xpack.monitoring.collection.cluster.state.timeout': true,
    'xpack.monitoring.collection.cluster.stats.timeout': true,
    'xpack.monitoring.collection.index.recovery.active_only': true,
    'xpack.monitoring.collection.index.recovery.timeout': true,
    'xpack.monitoring.collection.index.stats.timeout': true,
    'xpack.monitoring.collection.interval': true,
    'xpack.monitoring.collection.ml.job.stats.timeout': true,
    'xpack.monitoring.history.duration': true,
    'xpack.security.http.filter.enabled': true,
    'xpack.security.transport.filter.enabled': true,
    'xpack.watcher.history.cleaner_service.enabled': true,
    'action.auto_create_index': true,
    'action.destructive_requires_name': true,
    'action.search.shard_count.limit': true
  };

  return {
    valid: function(setting) {
      return settings[setting] || false;
    }
  };
})();

